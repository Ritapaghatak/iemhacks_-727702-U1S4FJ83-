#include <iostream>
using namespace std;
class Student
{
public:
    int roll;
    string name;

    // constructor
    Student(string, int); // prototype
};

Student::Student(string name, int roll)
{
    cout << "Constructor has been called" << endl;
    this->name = name;
    this->roll = roll;
}
int main()
{
    Student S1("Ishita", 12);  // constructor is called
    Student S2("Poulomi", 45); // constructor is called
    return 0;
}