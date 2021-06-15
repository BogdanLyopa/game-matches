import styled from "styled-components";

export default function Home({ toggleMode, changeMode, toggleStart }) {
  return (
    <Container>
      <div>
        <h1>Matches🔥</h1>
        <h2>How to play?❓</h2>
        <Rules>
          Two are playing a game. From a bunch of 25 matches, each takes one,
          two or three matches in turn. The winner is the one who at the end of
          the game - after all the matches are disassembled - will be an even
          number of matches.
        </Rules>
      </div>
      <div>
        <span>
          Choose mode:
          <Button onClick={toggleMode}>
            {changeMode ? "First mode" : "Second mode"}
          </Button>
        </span>
      </div>
      <Button onClick={toggleStart}>START</Button>
    </Container>
  );
}

const Rules = styled.p`
  text-align: center;
`;
const Container = styled.div`
  width: 600px;

  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  font-size: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
