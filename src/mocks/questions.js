const AVATAR_URL = `https://api.adorable.io/avatars/`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `./music/Ac_Dc_-_TNT.mp3`,
        genre: `rock`
      },
      {
        src: `./music/Robert_Johnson_-_Walking_Blues.mp3`,
        genre: `blues`
      },
      {
        src: `./music/John_Lewis_-_I_Remember_Clifford.mp3`,
        genre: `jazz`
      },
      {
        src: `./music/Scorpions_-_Pictured_Life.mp3`,
        genre: `rock`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `John Lewis`,
      src: `./music/John_Lewis_-_I_Remember_Clifford.mp3`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Lewis`
      }
    ]
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `./music/Ac_Dc_-_TNT.mp3`,
        genre: `rock`
      },
      {
        src: `./music/Robert_Johnson_-_Walking_Blues.mp3`,
        genre: `blues`
      },
      {
        src: `./music/John_Lewis_-_I_Remember_Clifford.mp3`,
        genre: `jazz`
      },
      {
        src: `./music/Scorpions_-_Pictured_Life.mp3`,
        genre: `rock`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `John Lewis`,
      src: `./music/John_Lewis_-_I_Remember_Clifford.mp3`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Lewis`
      }
    ]
  }
];
