using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI_Rest.Models;

namespace WebAPI_Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LaunchesController : ControllerBase
    {
        private readonly Context _context;

        public LaunchesController(Context context)
        {
            _context = context;
        }

        // GET: api/Launches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Launch>>> GetLaunches()
        {
            return await _context.Launches.ToListAsync();
        }

        // GET: api/Launches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Launch>> GetLaunch(int id)
        {
            var launch = await _context.Launches.FindAsync(id);

            if (launch == null)
            {
                return NotFound();
            }

            return launch;
        }

        // PUT: api/Launches/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLaunch(int id, Launch launch)
        {
            if (id != launch.Id)
            {
                return BadRequest();
            }

            _context.Entry(launch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LaunchExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Launches
        [HttpPost]
        public async Task<ActionResult<Launch>> PostLaunch(Launch launch)
        {
            _context.Launches.Add(launch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLaunch", new { id = launch.Id }, launch);
        }

        // DELETE: api/Launches/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Launch>> DeleteLaunch(int id)
        {
            var launch = await _context.Launches.FindAsync(id);
            if (launch == null)
            {
                return NotFound();
            }

            _context.Launches.Remove(launch);
            await _context.SaveChangesAsync();

            return launch;
        }

        private bool LaunchExists(int id)
        {
            return _context.Launches.Any(e => e.Id == id);
        }
    }
}
