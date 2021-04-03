import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-research-workshop',
  templateUrl: './cs-research-workshop.component.html',
  styleUrls: ['./cs-research-workshop.component.scss']
})
export class CsResearchWorkshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        subTitle: "Our Workshop",
        title: 'Explore CS Research',
        paragraphText: 'Program schedules'
    }
]
historyTimeline: TimelineBlock[] = [
    {
        year: '2021',
        date: 'April 9',
        title: 'Day 1',
        paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.',
        events:
        [
            {
              time : "10 AM - 11 AM",
              title: 'Welcome reception and ice breaker'
            },
            {
              time : "11 AM - Noon",
              title: 'Research group breakout (Introduction and Background)'
            },
            {
              time : "Noon - 1:30 PM",
              title: 'Break'
            },
            {
              time : "1:30 PM - 2:30 PM",
              title: 'Research group breakout (What is a good research problems? How do we formulate them?)'
            },
            {
              time : "2:30 PM - 3:30 PM",
              title: 'Talk ',
              speaker: 'Prof. Kate Saenko', 
              speakerLink: 'http://ai.bu.edu/ksaenko.html',
              speakerAffiliate : 'BU'
            },
            {
              time : "3:30 PM - 4:30 PM",
              title: 'Faculty Panel (Career paths in Academia after research, TBD) '
            }
        ]
        //img: 'assets/img/history/img1.jpg'
    },
    {
        year: '2021',
        date: 'April 16',
        title: 'Day 2',
        paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.',
        //img: 'assets/img/history/img2.jpg'
        events:
        [
          {
            time : "10 AM - 11 AM",
            title: 'Research group breakout (How to come up with research ideas. How to implement them?)'
          },
          {
            time : "11 AM - Noon",
            title: 'Talk',
            speaker: 'Anne Cocos PhD', 
            speakerLink: 'http://acocos.github.io/',
            speakerAffiliate : 'AskIggy'
          },
          {
            time : "Noon - 1 PM",
            title: 'Break'
          },
          {
            time : "1 PM - 2 PM",
            title: 'Talk',
            speaker: 'Prof. Sarah Bargal', 
            speakerLink: 'http://cs-people.bu.edu/sbargal/',
            speakerAffiliate : 'BU'
          },
          {
            time : "2 PM - 3 PM",
            title: 'Industry Panel (Career paths in Industry after research, Bishan Yang (Co-founder LAER-AI), Shanqing Cai (Software Engineer, Google), Meghana Kshirsagar (Researcher, AI4Good, Microsoft)'
          },
          {
            time : "3 PM - 4 PM",
            title: 'Undergraduate Panel (How to research as an undergraduate: Siyi Liu (MS, Penn), Alex Jones (BS, Dartmouth), Nikzad Khani (BS, BU), Jorge Nario (Software Engineer, Google)'
          }
        ]
    },
    {
        year: '2021',
        date: 'April 23',
        title: 'Day 3',
        paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.',
        //img: 'assets/img/history/img3.jpg'
        events:
        [
          {
            time : "10 AM - 11 AM",
            title: 'Research group breakout (How to write research findings)'
          },
          {
            time : "11 AM - Noon",
            title: 'Talk',
            speaker: 'Andy Anietie PhD', 
            speakerLink: 'https://centerfordigitalhealth.upenn.edu/anietie-andy',
            speakerAffiliate : 'Penn Medicine Center for Digital Health'
          },
          {
            time : "Noon - 1 PM",
            title: 'Break'
          },
          {
            time : "1 PM - 2 PM",
            title: 'Tensorflow Tutorial (Shanqing Cai, Google)'
          },
          {
            time : "2 PM - 3 PM",
            title: 'Research group breakout (How to publish?)'
          },
          {
            time : "3 PM ",
            title: 'Closing'
          }
        ]
    }
]


}

class sectionTitleContent {
  subTitle : string;
  title : string;
  paragraphText : string;
}
class TimelineBlock {
  year : string;
  date : string;
  title : string;
  paragraphText : string;
  events: Array<Event>;
  //img : string;
}

class Event {
  time : string;
  title: string;
  speaker?: string;
  speakerLink?: string;
  speakerAffiliate?: string;
}