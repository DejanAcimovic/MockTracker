using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MockTracker.Models;

namespace MockTracker.DB
{
    public static class InMemoryContext
    {
        static List<DayTasksheet> Sheets = null;
        static List<TaskType> TipoviZadataka = null;

        public static void AddSheet(DayTasksheet sheet) {
            if (Sheets == null)
                Sheets = new List<DayTasksheet>();

            Sheets.Add(sheet);
        }
        public static void AddType(TaskType tip)
        {
            if (TipoviZadataka == null)
                TipoviZadataka = new List<TaskType>();

            TipoviZadataka.Add(tip);
        }
        public static bool RemoveSheet(int pozicija)
        {
            if (Sheets.Count >= pozicija || pozicija < 0)
                return false;

            DayTasksheet dts = Sheets[pozicija];
            Sheets.Remove(dts);

            return true;
        }
        public static bool RemoveType(int pozicija)
        {
            if (TipoviZadataka.Count >= pozicija || pozicija < 0)
                return false;

            TaskType Tip = TipoviZadataka[pozicija];
            TipoviZadataka.Remove(Tip);

            return true;
        }

        public static List<DayTasksheet> GetSheets()
        {
            return Sheets;
        }

        public static List<TaskType> GetTaskTypes() {
            return TipoviZadataka;
        }
        
    }
}
