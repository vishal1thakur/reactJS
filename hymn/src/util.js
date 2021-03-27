import {v4 as uuidv4} from 'uuid';

function chillHop() {
  return [
    {
      name: 'Peaches',
      artist: 'Philanthrope, The Field Tapes',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11239',
      color: ['#B6AD85', '#283058'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Doin It',
      artist: 'Tesk',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/97781364b9aa2c2896642b5f896761e07fd9894e-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=1742',
      color: ['#ABA6A2', '#8F7E6C'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Today Feels Like Everyday',
      artist: 'Mama Aiuto',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12126',
      color: ['#843721', '#5FA0A6'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'be here now',
      artist: 'chief.',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/d9cef192a40176c391f027231b399322ce91197d-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=1373',
      color: ['#C9443F', '#3A5A77'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
