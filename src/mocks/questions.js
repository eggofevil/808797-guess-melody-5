export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: ``,
        genre: `rock`
      },
      {
        src: ``,
        genre: `blues`
      },
      {
        src: ``,
        genre: `jazz`
      },
      {
        src: ``,
        genre: `rock`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: ``
    },
    answers: [
      {
        picture: `\${AVATAR_URL}/\${Math.random()}`,
        artist: `John Snow`
      },
      {
        picture: `\${AVATAR_URL}/\${Math.random()}`,
        artist: `Jack Daniels`
      },
      {
        picture: `\${AVATAR_URL}/\${Math.random()}`,
        artist: `Jim Beam`
      }
    ]
  }
];
