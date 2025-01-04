using FitnessWorkoutTracker.Entities.SettingsEntities;
using LiteDB;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnessWorkoutTracker.Entities.DbModel
{
    public class LiteDbContext
    {
        public readonly LiteDatabase Context;
        private readonly ConnectionStrings _connectionStrings;

        public LiteDbContext(IOptions<ConnectionStrings> connectionStrings)
        {
            _connectionStrings = connectionStrings.Value;
            try
            {
                LiteDatabase dbContext = new LiteDatabase(_connectionStrings.DefaultConnection);
                if (dbContext != null)
                    Context = dbContext;
            }
            catch (Exception ex)
            {
                throw new Exception("Error while creating Database Context", ex);
            }
        }

    }
}
