using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MockTracker.Models;
using MockTracker.DB;

namespace MockTracker.Services
{
    public class UserService:IUser
    {
        public User GetCurrentUser()
        {
            return InMemoryContext.GetCurrentUser();
        }
    }
}
