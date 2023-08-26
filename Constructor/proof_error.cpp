// When a construct is called explicitlity default constructor doesnot exict.
#include <iostream>
using namespace std;
class Student
{
public:
  int roll;
  string name;

  // constructor
  Student(string name, int roll)
  {
    this->name = name;
    this->roll = roll;
  }
};
int main()
{
  Student S1("Ishita", 12); // constructor is called
  Student S2("Diya", 30);   // Constructor is called
  Student S3 ;               // this will cause an error due to lack of suitable constructor
  return 0;
}