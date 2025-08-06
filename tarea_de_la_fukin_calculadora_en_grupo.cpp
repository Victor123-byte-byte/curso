#include <iostream>
#include <string>
#include <vector>
#include <stack>
#include <cmath>
#include <map>
#include <sstream>
#include <cctype>
#include <stdexcept>

const double PI = 3.14159265358979323846;
const double E = 2.71828182845904523536;

std::map<char, int> precedencia = {
    {'+', 1}, {'-', 1},
    {'*', 2}, {'/', 2},
    {'^', 3}
};

std::map<std::string, int> precedencia_func = {
    {"sin", 4}, {"cos", 4}, {"tan", 4},
    {"sqrt", 4}, {"log", 4}, {"ln", 4}
};

bool esOperador(char c) {
    return precedencia.count(c);
}

bool esNumero(char c) {
    return isdigit(c) || c == '.';
}

std::vector<std::string> tokenizar(const std::string& expresion) {
    std::vector<std::string> tokens;
    std::string token;
    for (size_t i = 0; i < expresion.length(); ++i) {
        if (expresion[i] == ' ') {
            continue;
        } else if (esNumero(expresion[i])) {
            token.clear();
            while (i < expresion.length() && esNumero(expresion[i])) {
                token += expresion[i];
                i++;
            }
            tokens.push_back(token);
            i--;
        } else if (esOperador(expresion[i])) {
            tokens.push_back(std::string(1, expresion[i]));
        } else if (expresion[i] == '(' || expresion[i] == ')') {
            tokens.push_back(std::string(1, expresion[i]));
        } else if (isalpha(expresion[i])) {
            token.clear();
            while (i < expresion.length() && isalpha(expresion[i])) {
                token += expresion[i];
                i++;
            }
            if (token == "pi") {
                tokens.push_back(std::to_string(PI));
            } else if (token == "e") {
                tokens.push_back(std::to_string(E));
            } else {
                tokens.push_back(token);
            }
            i--;
        }
    }
    return tokens;
}


std::vector<std::string> shuntingYard(const std::vector<std::string>& tokens) {
    std::vector<std::string> salida;
    std::stack<std::string> operadores;
    for (const auto& token : tokens) {
        if (isdigit(token[0]) || (token.size() > 1 && token[0] == '-' && isdigit(token[1]))) {
            salida.push_back(token);
        } else if (precedencia_func.count(token)) {
            operadores.push(token);
        } else if (token == "(") {
            operadores.push(token);
        } else if (token == ")") {
            while (!operadores.empty() && operadores.top() != "(") {
                salida.push_back(operadores.top());
                operadores.pop();
            }
            if (!operadores.empty()) {
                operadores.pop();
            }
            if (!operadores.empty() && precedencia_func.count(operadores.top())) {
                salida.push_back(operadores.top());
                operadores.pop();
            }
        } else if (precedencia.count(token[0])) {
            while (!operadores.empty() && operadores.top() != "(" && precedencia.count(operadores.top()[0]) &&
                   precedencia[operadores.top()[0]] >= precedencia[token[0]]) {
                salida.push_back(operadores.top());
                operadores.pop();
            }
            operadores.push(token);
        }
    }
    while (!operadores.empty()) {
        if (operadores.top() == "(") {
            throw std::runtime_error("Error de parentesis.");
        }
        salida.push_back(operadores.top());
        operadores.pop();
    }
    return salida;
}


double evaluar(const std::vector<std::string>& rpn) {
    std::stack<double> valores;
    for (const auto& token : rpn) {
        if (isdigit(token[0]) || (token.size() > 1 && token[0] == '-' && isdigit(token[1]))) {
            valores.push(std::stod(token));
        } else if (precedencia.count(token[0])) {
            if (valores.size() < 2) {
                throw std::runtime_error("Expresion invalida: pocos operandos.");
            }
            double op2 = valores.top(); valores.pop();
            double op1 = valores.top(); valores.pop();
            switch (token[0]) {
                case '+': valores.push(op1 + op2); break;
                case '-': valores.push(op1 - op2); break;
                case '*': valores.push(op1 * op2); break;
                case '/':
                    if (op2 == 0) throw std::runtime_error("Error: Division por cero.");
                    valores.push(op1 / op2);
                    break;
                case '^': valores.push(std::pow(op1, op2)); break;
            }
        } else if (precedencia_func.count(token)) {
            if (valores.empty()) {
                throw std::runtime_error("Expresion invalida: funcion sin operando.");
            }
            double op = valores.top(); valores.pop();
            if (token == "sqrt") {
                if (op < 0) throw std::runtime_error("Error: Raiz cuadrada de numero negativo.");
                valores.push(std::sqrt(op));
            } else if (token == "sin") {
                valores.push(std::sin(op));
            } else if (token == "cos") {
                valores.push(std::cos(op));
            } else if (token == "tan") {
                valores.push(std::tan(op));
            } else if (token == "log") {
                if (op <= 0) throw std::runtime_error("Error: Logaritmo de numero no positivo.");
                valores.push(std::log10(op));
            } else if (token == "ln") {
                if (op <= 0) throw std::runtime_error("Error: Logaritmo natural de numero no positivo.");
                valores.push(std::log(op));
            } else {
                throw std::runtime_error("Funcion no reconocida.");
            }
        }
    }
    if (valores.size() != 1) {
        throw std::runtime_error("Expresion invalida.");
    }
    return valores.top();
}

int main() {
    std::string expresion;
    std::cout << "---Bienvenido a la calculadora  broder🤑🤑---\n";
    std::cout << "Escriba 'exit' pa salir burro👻.\n";
    std::cout << "Aca te dejo un ejemplito: (sin(pi/2) + 5^2) / 2\n";

    while (true) {
        std::cout << "pon tu operacion aqui👉 ";
        std::getline(std::cin, expresion);

        if (expresion == "exit") {
            break;
        }

        try {
            std::vector<std::string> tokens = tokenizar(expresion);
            std::vector<std::string> rpn = shuntingYard(tokens);
            double resultado = evaluar(rpn);
            std::cout << "Resultado: " << resultado << std::endl;
        } catch (const std::exception& e) {
            std::cout << "Error: " << e.what() << std::endl;
        }
    }
    return 0;
}