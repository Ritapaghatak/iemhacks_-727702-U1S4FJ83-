#include<iostream>
using namespace std;
class Student{
    public:
       int roll;
       string name;
       
       //constructor
       Student(string name,int roll)
       {
         this->name=name;
         this->roll=roll;
       }

};
int main()
{
  Student S1("Ishita",12);//Constructor is called
  Student S2("Diya",30);
  cout<<S1.name<<" "<<S1.roll<<endl;
  cout<<S2.name<<" "<<S2.roll<<endl;
  return 0;
}