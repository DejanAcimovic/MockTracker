using System;
using System.ComponentModel.DataAnnotations;

namespace MockTracker.Models
{
    public class User
    {
        int Id {get; set;}
        int userID; //treba promijeniti u objekat user

        int typeOfTaks; //treba promijeniti u objekat typeOfTaks
        DateTime startTime;
        DateTime endTime;

        Boolean billable; 

    }
}