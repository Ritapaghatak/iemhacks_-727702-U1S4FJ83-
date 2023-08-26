#include<iostream>
using namespace std;
class Student{              //this is deafault costructor
public:
   int roll;
   string name;
   //constructor //as we are creating a constructor explicitly ,the defaltconstructor will not exict anymore created.
   Student()//constructor name should be same as class name.
   {
     cout<<"constructor has been called"<<endl;
   }
};
int main()
{
Student S1;           //Default constructor is created here with the creation of the object

Student S2;

return 0;
}