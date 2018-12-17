using System;
using Xunit;

namespace MockTracker.UnitTests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            Assert.Equal(4, Add(2, 2));
        }

        int Add(int a, int b){
            return a+b;
        }
    }

}
