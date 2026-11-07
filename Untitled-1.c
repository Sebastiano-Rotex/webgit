#include <stdio.h>
	int main()
	{
		int a = 5, b = 10; 
float d,c;
c = a = ++b, ++a, d=(float)a/b--, ++b;
printf("%d %d , %f %f\n",a,b,c,d);
		return 0;
	}

    