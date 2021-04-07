using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ASP.NET_Core_with_Angular_Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        // GET: api/<CitiesController>
        [HttpGet]
        public IEnumerable<City> Get()
        {
            List<City> _Cities = new List<City>(){
                new City(){ Id = 1, Name = "Ottawa"},
                new City(){ Id = 2, Name = "Waterloo"},
                new City(){ Id = 3, Name = "Beijing"}
            };            
            return _Cities;
        }

    // GET api/<CitiesController>/5
    [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CitiesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CitiesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CitiesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
