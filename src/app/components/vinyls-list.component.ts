import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinyls-list',
  templateUrl: './vinyls-list.component.html',
  styleUrls: ['./vinyls-list.component.css']
})
export class VinylsListComponent implements OnInit {

  collection = [
    { 
      title : 'Elvis Presley (1956)',
      artist: 'Elvis Presley',
      description: `Two simple words: “Elvis” and “Presley” (the latter barely hiding that 
        controversial pelvis from view): that’s all it needed to say. Caught in full flow 
        during a performance at the Fort Homer Hesterly Armory, Tampa, Florida, on 31 July 
        1955, you can still feel the primal rock’n’roll energy from a young man ready to take 
        over the world. Two decades later, The Clash felt there was still none more rock’n’roll, 
        and nicked the idea for their own epochal London Calling album cover.`,
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Elvis-Presley-Album-Cover.jpg'
    },
    { 
      title : 'Sgt Pepper’s Lonely Hearts Club Band (1967)',
      artist: 'The Beatles',
      description: `At the time the most expensive album cover ever made, the Sgt Pepper album cover 
      remains a pop art masterpiece that has influenced everyone from Frank Zappa (We’re Only In It For 
        The Money) to The Simpsons (The Yellow Album). Staged by British artist Peter Blake and his then-wife, 
        Jann Haworth, the Sgt Pepper album cover depicted 58 different people, chosen by John Lennon, 
        Paul McCartney, George Harrison, Peter Blake, Jann Haworth and London art dealer Robert Fraser, 
        presenting a fascinating cross-section of cultures, importance and each Beatle’s individual interests.`,
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Beatles-Sgt-Pepper-Cover.jpg'
    },
    { 
      title : 'The Velvet Underground & Nico (1967)',
      artist: 'The Velvet Underground & Nico',
      description: '',
      imageUrl: ''
    },
    { 
      title : 'Weasels Ripped My Flesh (1970)',
      artist: 'Frank Zappa',
      description: '',
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/The-Mothers-Of-Invention-Weasels-Ripped-My-Flesh.jpg'
    },
    { 
      title : 'Elvis Presley (1956)',
      artist: 'Elvis Presley',
      description: `Two simple words: “Elvis” and “Presley” (the latter barely hiding that 
        controversial pelvis from view): that’s all it needed to say. Caught in full flow 
        during a performance at the Fort Homer Hesterly Armory, Tampa, Florida, on 31 July 
        1955, you can still feel the primal rock’n’roll energy from a young man ready to take 
        over the world. Two decades later, The Clash felt there was still none more rock’n’roll, 
        and nicked the idea for their own epochal London Calling album cover.`,
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Elvis-Presley-Album-Cover.jpg'
    },
    { 
      title : 'Sgt Pepper’s Lonely Hearts Club Band (1967)',
      artist: 'The Beatles',
      description: `At the time the most expensive album cover ever made, the Sgt Pepper album cover 
      remains a pop art masterpiece that has influenced everyone from Frank Zappa (We’re Only In It For 
        The Money) to The Simpsons (The Yellow Album). Staged by British artist Peter Blake and his then-wife, 
        Jann Haworth, the Sgt Pepper album cover depicted 58 different people, chosen by John Lennon, 
        Paul McCartney, George Harrison, Peter Blake, Jann Haworth and London art dealer Robert Fraser, 
        presenting a fascinating cross-section of cultures, importance and each Beatle’s individual interests.`,
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Beatles-Sgt-Pepper-Cover.jpg'
    },
    { 
      title : 'The Velvet Underground & Nico (1967)',
      artist: 'The Velvet Underground & Nico',
      description: '',
      imageUrl: ''
    },
    { 
      title : 'Weasels Ripped My Flesh (1970)',
      artist: 'Frank Zappa',
      description: '',
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/The-Mothers-Of-Invention-Weasels-Ripped-My-Flesh.jpg'
    },
    { 
      title : 'Elvis Presley (1956)',
      artist: 'Elvis Presley',
      description: `Two simple words: “Elvis” and “Presley” (the latter barely hiding that 
        controversial pelvis from view): that’s all it needed to say. Caught in full flow 
        during a performance at the Fort Homer Hesterly Armory, Tampa, Florida, on 31 July 
        1955, you can still feel the primal rock’n’roll energy from a young man ready to take 
        over the world. Two decades later, The Clash felt there was still none more rock’n’roll, 
        and nicked the idea for their own epochal London Calling album cover.`,
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Elvis-Presley-Album-Cover.jpg'
    },
    { 
      title : 'Sgt Pepper’s Lonely Hearts Club Band (1967)',
      artist: 'The Beatles',
      description: `At the time the most expensive album cover ever made, the Sgt Pepper album cover 
      remains a pop art masterpiece that has influenced everyone from Frank Zappa (We’re Only In It For 
        The Money) to The Simpsons (The Yellow Album). Staged by British artist Peter Blake and his then-wife, 
        Jann Haworth, the Sgt Pepper album cover depicted 58 different people, chosen by John Lennon, 
        Paul McCartney, George Harrison, Peter Blake, Jann Haworth and London art dealer Robert Fraser, 
        presenting a fascinating cross-section of cultures, importance and each Beatle’s individual interests.`,
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Beatles-Sgt-Pepper-Cover.jpg'
    },
    { 
      title : 'The Velvet Underground & Nico (1967)',
      artist: 'The Velvet Underground & Nico',
      description: '',
      imageUrl: ''
    },
    { 
      title : 'Weasels Ripped My Flesh (1970)',
      artist: 'Frank Zappa',
      description: '',
      imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/The-Mothers-Of-Invention-Weasels-Ripped-My-Flesh.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
