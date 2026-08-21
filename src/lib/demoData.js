const badge = (initials, primary, secondary = '#071009') => (
  `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <path fill="${primary}" d="M40 2 70 12v25c0 20-12 34-30 41C22 71 10 57 10 37V12z"/>
      <path fill="none" stroke="${secondary}" stroke-width="4" d="M40 8 64 16v21c0 15-8 27-24 34-16-7-24-19-24-34V16z"/>
      <text x="40" y="47" text-anchor="middle" fill="${secondary}" font-family="Arial" font-size="22" font-weight="800">${initials}</text>
    </svg>`)} `
);

const teams = [
  { team_id: 1, teamName: 'North London FC', logo: badge('NL', '#ef3340'), rank: 1, points: 67, goalsDiff: 38, forme: 'WWDWW', all: { matchsPlayed: 28, win: 21, draw: 4, lose: 3, goalsFor: 64, goalsAgainst: 26 } },
  { team_id: 2, teamName: 'Manchester Sky', logo: badge('MS', '#6cabdd'), rank: 2, points: 64, goalsDiff: 35, forme: 'WWLWW', all: { matchsPlayed: 28, win: 20, draw: 4, lose: 4, goalsFor: 61, goalsAgainst: 26 } },
  { team_id: 3, teamName: 'Merseyside Reds', logo: badge('MR', '#d00027', '#fff'), rank: 3, points: 60, goalsDiff: 29, forme: 'DWWWW', all: { matchsPlayed: 28, win: 18, draw: 6, lose: 4, goalsFor: 57, goalsAgainst: 28 } },
  { team_id: 4, teamName: 'West London Blue', logo: badge('WB', '#034694', '#fff'), rank: 4, points: 52, goalsDiff: 20, forme: 'WLWDW', all: { matchsPlayed: 28, win: 15, draw: 7, lose: 6, goalsFor: 48, goalsAgainst: 28 } },
  { team_id: 5, teamName: 'Tyneside United', logo: badge('TU', '#f5f5f5'), rank: 5, points: 48, goalsDiff: 14, forme: 'WDWLW', all: { matchsPlayed: 28, win: 14, draw: 6, lose: 8, goalsFor: 44, goalsAgainst: 30 } },
  { team_id: 6, teamName: 'Birmingham Lions', logo: badge('BL', '#670e36', '#fff'), rank: 6, points: 45, goalsDiff: 9, forme: 'LWWDW', all: { matchsPlayed: 28, win: 13, draw: 6, lose: 9, goalsFor: 41, goalsAgainst: 32 } },
];

export const demoStandings = [teams];
export const demoCountries = [{ label: 'England', value: 'England' }];
export const demoLeagues = [{ label: 'Premier Division', value: 100 }];
export const demoClubs = [teams[0], teams[2]];

export const demoTeamInfo = [{
  team_id: 1,
  logo: teams[0].logo,
  name: 'North London FC',
  founded: 1886,
  country: 'England',
  venue_city: 'London',
  venue_name: 'North Bank Stadium',
  venue_capacity: '60,704',
}];

export const demoFixtures = [
  { fixture_id: 101, event_date: '2026-08-23T15:30:00Z', league: { name: 'Premier Division' }, homeTeam: { logo: teams[0].logo, team_name: teams[0].teamName }, awayTeam: { logo: teams[3].logo, team_name: teams[3].teamName } },
  { fixture_id: 102, event_date: '2026-08-30T17:00:00Z', league: { name: 'Premier Division' }, homeTeam: { logo: teams[1].logo, team_name: teams[1].teamName }, awayTeam: { logo: teams[0].logo, team_name: teams[0].teamName } },
  { fixture_id: 103, event_date: '2026-09-06T14:00:00Z', league: { name: 'Premier Division' }, homeTeam: { logo: teams[0].logo, team_name: teams[0].teamName }, awayTeam: { logo: teams[4].logo, team_name: teams[4].teamName } },
  { fixture_id: 104, event_date: '2026-09-13T16:30:00Z', league: { name: 'Premier Division' }, homeTeam: { logo: teams[2].logo, team_name: teams[2].teamName }, awayTeam: { logo: teams[0].logo, team_name: teams[0].teamName } },
];

export const demoPlayers = [
  { player_id: 11, firstname: 'Ethan', lastname: 'Cole', position: 'Goalkeeper', nationality: 'England', age: 27, height: '191 cm', weight: '84 kg' },
  { player_id: 12, firstname: 'Mateo', lastname: 'Silva', position: 'Defender', nationality: 'Spain', age: 25, height: '184 cm', weight: '78 kg' },
  { player_id: 13, firstname: 'Noah', lastname: 'Williams', position: 'Midfielder', nationality: 'England', age: 23, height: '179 cm', weight: '73 kg' },
  { player_id: 14, firstname: 'Luca', lastname: 'Moretti', position: 'Midfielder', nationality: 'Italy', age: 26, height: '181 cm', weight: '75 kg' },
  { player_id: 15, firstname: 'Kai', lastname: 'Andersen', position: 'Forward', nationality: 'Denmark', age: 24, height: '187 cm', weight: '80 kg' },
  { player_id: 16, firstname: 'Amari', lastname: 'Johnson', position: 'Forward', nationality: 'USA', age: 22, height: '183 cm', weight: '77 kg' },
];

export const demoPlayerStats = [{
  player_id: 15,
  league_id: 100,
  player_name: 'Kai Andersen',
  team_name: 'North London FC',
  rating: '7.84',
  position: 'Forward',
  games: { appearences: 26, minutes_played: 2184 },
  goals: { total: 18 },
  passes: { total: 684, accuracy: '86%' },
  cards: { yellow: 3, red: 0 },
}];
