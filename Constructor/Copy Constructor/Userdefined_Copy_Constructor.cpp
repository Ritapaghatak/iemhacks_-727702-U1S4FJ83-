#include<iostream>
using namespace std;
class Student
{
    public:
     int StudentID;
     Student()//non paramitarized constructor
      {
        StudentID=0;
        
      }
      Student(int StudentID)
      {
        this->StudentID=StudentID;
        
      }
      Student(Student &obj)
      {
         cout<<"Copy consructor called"<<endl;
         StudentID=obj.StudentID;
      }
      
      void display()
      {
        cout<<"Student ID is "<<StudentID<<endl;
      }
};
int main()
{
    Student S1,S2(5),S3;
    S1.display();
    S2.display();
    //Student S3(S2);-Mehord 1
     S3=S2;//first s3 is created then later on s2  properties is copied to s3.
     /*if we used s3=s2  copy constructr will not is used here as beacuse while 
     delearing the obj construct was assind to it(i.e )the first constructor.*/
     S3.display();
    return 0;
    /*Student S1,S2(5);
    S1.display();
    S2.display();
    //Student S3(S2);-Mehord 1
    Student S3=S2;//assign the properties of s2 to s3 while s3 is being created. 
    S3.display();
    return 0;*/
}