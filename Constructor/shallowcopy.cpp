// Default copy constructor always creates shallow copy.
#include <iostream>
using namespace std;
class Test
{
public:
    int num;
    int *ptr;
    Test()
    {
        ptr = new int; // int*ptr=new int;
    }
    void SetValues(int values1, int values2)
    {
        num = values1;
        *ptr = values2;
    }
    void display()
    {
        cout << "num " << num << "and*ptr =" <<*ptr << endl;
    }
};
int main()
{
    Test t1;
    t1.SetValues(5, 7);
    //Test t2(t1); // default copy constructor.
    Test t2=t1;//DEFAULT Copy constructor is called
    t1.display();
    t2.display();
    t2.SetValues(6, 9);
    t1.display();
    t2.display();
    return 0;
}