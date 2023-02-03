/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'Hackers', genre: 'Thriller/Crime', release_date: '1995-09-15'},
    {id: 2, title: 'The Matrix', genre: 'Action/Cyberpunk', release_date: '1999-03-31'},
    {id: 3, title: 'Operation Takedown', genre: 'Crime', release_date: '2000-03-15'}
  ]);
};
