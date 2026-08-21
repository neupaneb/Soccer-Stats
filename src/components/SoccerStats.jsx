import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../assets/styles';

import SelectCountry from './SelectCountry';
import SelectLeague from './SelectLeague';
import LeagueStandings from './LeagueStandings';
import MyClubs from './MyClubs';
import ClubInfomation from './ClubInfo';
import TeamFixtures from './TeamFixtures';
import TeamPlayers from './TeamPlayers';
import PlayerHighlightedStats from './PlayerHighlightedStats';

import {
  getFootballStandings,
  getFootballCountries,
  getFootballLeaguess,
  getTeamInfo,
  getTeamFixtures,
  getTeamPlayers,
  getPlayerStats,
} from '../lib/DatabaseRequests';
import { assignCountryOptions, assignLeagueOptions } from '../lib/CountriesAndLeagues';
import {
  demoStandings, demoCountries, demoLeagues, demoClubs, demoTeamInfo,
  demoFixtures, demoPlayers, demoPlayerStats,
} from '../lib/demoData';

const AppShell = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 32px 80px;

  @media (max-width: 720px) { padding: 0 16px 48px; }
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
`;

const Brand = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 800;
  gap: 10px;
`;

const BrandMark = styled.span`
  align-items: center;
  background: var(--accent);
  border-radius: 10px;
  color: #071009;
  display: inline-flex;
  font-size: 18px;
  height: 38px;
  justify-content: center;
  transform: rotate(-4deg);
  width: 38px;
`;

const Status = styled.span`
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  display: flex;
  font-size: 13px;
  gap: 8px;
  padding: 8px 12px;

  &::before { background: var(--accent); border-radius: 50%; content: ''; height: 7px; width: 7px; }
`;

const Hero = styled.header`
  background:
    linear-gradient(90deg, rgba(9, 14, 12, .96) 0%, rgba(9, 14, 12, .80) 56%, rgba(9, 14, 12, .18) 100%),
    repeating-linear-gradient(90deg, #1b3427 0, #1b3427 70px, #183023 70px, #183023 140px);
  border: 1px solid var(--line);
  border-radius: 20px;
  display: grid;
  gap: 32px;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, .75fr);
  overflow: hidden;
  padding: 44px;
  position: relative;

  &::after {
    border: 2px solid rgba(255, 255, 255, .12);
    border-radius: 50%;
    content: '';
    height: 260px;
    position: absolute;
    right: -70px;
    top: -45px;
    width: 260px;
  }

  @media (max-width: 800px) { grid-template-columns: 1fr; padding: 32px 24px; }
`;

const Eyebrow = styled.p`
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .16em;
  margin: 0 0 14px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: clamp(36px, 4.5vw, 58px);
  letter-spacing: -.045em;
  line-height: 1.05;
  margin: 0;
  max-width: 700px;
`;

const HeroCopy = styled.div`
  color: #c9d4ce;
  font-size: 15px;
  line-height: 1.65;
  margin: 18px 0 0;
  max-width: 580px;
`;

const CompetitionCard = styled.aside`
  align-self: stretch;
  backdrop-filter: blur(10px);
  background: rgba(7, 16, 11, .72);
  border: 1px solid rgba(255, 255, 255, .12);
  border-radius: 15px;
  padding: 22px;
  position: relative;
  z-index: 1;
`;

const CompetitionHead = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--line);
  display: flex;
  gap: 12px;
  padding-bottom: 16px;

  b { display: block; font-family: 'Manrope', sans-serif; }
  small { color: var(--muted); }
`;

const LeagueBall = styled.span`
  align-items: center;
  background: var(--accent);
  border-radius: 50%;
  color: #071009;
  display: flex;
  font-size: 20px;
  height: 42px;
  justify-content: center;
  width: 42px;
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 18px;

  div + div { border-left: 1px solid var(--line); padding-left: 14px; }
  strong { display: block; font-family: 'Manrope', sans-serif; font-size: 20px; }
  span { color: var(--muted); font-size: 10px; letter-spacing: .07em; text-transform: uppercase; }
`;

const FilterBar = styled.section`
  align-items: end;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr auto;
  margin: 24px 0 32px;
  padding: 18px;

  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const Filter = styled.div`
  min-width: 0;
  label { color: var(--muted); display: block; font-size: 12px; font-weight: 700; letter-spacing: .08em; margin: 0 0 8px 3px; text-transform: uppercase; }
`;

const Hint = styled.div`
  color: var(--muted);
  font-size: 13px;
  max-width: 190px;
  padding: 0 8px 9px;
  @media (max-width: 760px) { max-width: none; }
`;

const Section = styled.section` margin-top: 40px; `;

const SectionHeading = styled.div`
  align-items: end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  h2 { font-family: 'Manrope', sans-serif; font-size: 26px; letter-spacing: -.04em; margin: 0; }
  p { color: var(--muted); font-size: 13px; margin: 0; }
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(0, 2fr) minmax(320px, .8fr);

  & > * { min-width: 0; }
  @media (max-width: 980px) { grid-template-columns: 1fr; }
`;

const EmptyState = styled.div`
  background: var(--surface);
  border: 1px dashed rgba(255,255,255,.18);
  border-radius: 18px;
  color: var(--muted);
  padding: 48px 24px;
  text-align: center;
`;

const Footer = styled.footer`
  border-top: 1px solid var(--line);
  color: var(--muted);
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  margin-top: 64px;
  padding-top: 24px;
`;

class SoccerStats extends Component {
  constructor() {
    super();
    this.state = {
      standings: demoStandings, countries: demoCountries, leagues: demoLeagues,
      myClubs: demoClubs, teamPlayers: demoPlayers,
      teamHighlightInfo: demoTeamInfo, playerHighlightInfo: demoPlayerStats,
      teamHighlightFixtures: demoFixtures,
    };
    this.addClubToList = this.addClubToList.bind(this);
    this.removeClubFromList = this.removeClubFromList.bind(this);
    this.highlightClubInfo = this.highlightClubInfo.bind(this);
    this.highlightPlayerInfo = this.highlightPlayerInfo.bind(this);
    this.updateCountryLeagueList = this.updateCountryLeagueList.bind(this);
    this.updateFootballStandings = this.updateFootballStandings.bind(this);
  }

  componentDidMount() {
    getFootballStandings(2790, (standings) => {
      this.setState({ standings });
      this.updateCountryLeagueList({ value: 'England' });
      this.highlightClubInfo(63);
      this.addClubToList(63);
      this.highlightPlayerInfo(19130);
    });
    getFootballCountries((availableCountries) => {
      this.setState({ countries: assignCountryOptions(availableCountries) });
    });
  }

  addClubToList(id) {
    const { standings, myClubs } = this.state;
    const findTeam = standings.map((team) => team.find((entry) => entry.team_id === id))
      .filter((entry) => entry !== undefined);
    if (!myClubs.some((club) => club.team_id === id) && findTeam[0]) {
      this.setState((prevState) => ({ myClubs: [findTeam[0], ...prevState.myClubs] }));
    }
    this.highlightClubInfo(id);
  }

  removeClubFromList(id) {
    this.setState((prevState) => ({
      myClubs: prevState.myClubs.filter((club) => club.team_id !== id),
    }));
  }

  highlightClubInfo(id) {
    getTeamInfo(id, (teamHighlightInfo) => this.setState({ teamHighlightInfo }));
    getTeamFixtures(id, (teamHighlightFixtures) => this.setState({ teamHighlightFixtures }));
    getTeamPlayers(id, (teamPlayers) => this.setState({ teamPlayers }));
  }

  highlightPlayerInfo(id) {
    getPlayerStats(id, (playerHighlightInfo) => this.setState({ playerHighlightInfo }));
  }

  updateCountryLeagueList(country) {
    getFootballLeaguess(country.value, (allLeagues) => {
      this.setState({ leagues: assignLeagueOptions(allLeagues) });
    });
  }

  updateFootballStandings(league) {
    getFootballStandings(league.value, (standings) => this.setState({ standings }));
  }

  render() {
    const {
      standings, countries, leagues, myClubs, teamPlayers, teamHighlightInfo,
      playerHighlightInfo, teamHighlightFixtures,
    } = this.state;

    return (
      <AppShell>
        <GlobalStyle />
        <Nav>
          <Brand><BrandMark>⚽</BrandMark> Soccer Stat Analyzer</Brand>
          <Status>Live analytics</Status>
        </Nav>
        <Hero>
          <div>
            <Eyebrow>2026/27 season · Live dashboard</Eyebrow>
            <Title>Premier Division analytics</Title>
            <HeroCopy>
              Track the title race, compare club form, and explore squad performance from one matchday dashboard.
            </HeroCopy>
          </div>
          <CompetitionCard>
            <CompetitionHead>
              <LeagueBall>⚽</LeagueBall>
              <div><b>Premier Division</b><small>England · Matchweek 28 of 38</small></div>
            </CompetitionHead>
            <Metrics>
              <div><strong>20</strong><span>Clubs</span></div>
              <div><strong>280</strong><span>Played</span></div>
              <div><strong>2.84</strong><span>Goals / match</span></div>
            </Metrics>
          </CompetitionCard>
        </Hero>

        <FilterBar aria-label="League filters">
          <Filter><label htmlFor="country-select">Country</label><SelectCountry countries={countries} updateCountryLeagueList={this.updateCountryLeagueList} /></Filter>
          <Filter><label htmlFor="league-select">Competition</label><SelectLeague leagues={leagues} updateFootballStandings={this.updateFootballStandings} /></Filter>
          <Hint>Choose a competition, then select a club from the table.</Hint>
        </FilterBar>

        <main>
          <Section>
            <SectionHeading><h2>League table</h2><p>Click any club to follow</p></SectionHeading>
            {standings.length ? (
              <Grid>
                <LeagueStandings standings={standings} addClubToList={this.addClubToList} />
                <MyClubs myClubs={myClubs} removeClubFromList={this.removeClubFromList} highlightClubInfo={this.highlightClubInfo} />
              </Grid>
            ) : <EmptyState>Loading the latest league table…</EmptyState>}
          </Section>

          {teamHighlightFixtures.length ? (
            <Section>
              <SectionHeading><h2>Club overview</h2><p>Details and upcoming fixtures</p></SectionHeading>
              <Grid><ClubInfomation teamHighlightInfo={teamHighlightInfo} /><TeamFixtures fixtures={teamHighlightFixtures} /></Grid>
            </Section>
          ) : null}

          {teamPlayers.length ? (
            <Section>
              <SectionHeading><h2>Squad intelligence</h2><p>Select a player for performance data</p></SectionHeading>
              <Grid><TeamPlayers players={teamPlayers} highlightPlayerInfo={this.highlightPlayerInfo} /><PlayerHighlightedStats playerHighlightInfo={playerHighlightInfo} /></Grid>
            </Section>
          ) : null}
        </main>
        <Footer><span>Soccer Stat Analyzer · Performance intelligence</span><span>React · Express · MongoDB</span></Footer>
      </AppShell>
    );
  }
}

export default SoccerStats;
