import React, { useEffect, useState } from 'react';
import { BalldontlieAPI } from '@balldontlie/sdk';

const api = new BalldontlieAPI({
  apiKey: '',
});

export function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await api.nba.getTeams({ season: 2024 });
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }
    fetchTeams();
  }, []);

  return (
    <div className="teams">
      {teams.map((team) => (
        <div key={team.id} className="team">
          {team.full_name}
        </div>
      ))}
    </div>
  );
}

