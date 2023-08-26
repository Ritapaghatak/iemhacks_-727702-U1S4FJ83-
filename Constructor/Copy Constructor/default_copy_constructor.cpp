#include<iostream>
using namespace std;
class Student
{
    public:
    int StudentID;
    Student()
    {
        StudentID=0;
    }
    Student(int StudentID)
    {
        this->StudentID=StudentID;
    }
    void display()
    {
        cout<<"Student ID is "<<StudentID<<endl;
    }
};
int main()
{
Student S2(5);
S2.display();
Student S3(S2);
S3.display();
return 0;
}



