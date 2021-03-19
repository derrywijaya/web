import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }
}

export interface IMessage {
  id: number;
  text: string;
}
export interface ILink {
  url: string;
  text: string;
}

export interface IResearch {
  pageTitleArea : Array<IPageTitle>;
  teamMembers : Array<IScientistBoxContent>;
  publicationContent : Array<IContent>;
  pubList: Array<IPublicationList>;
  caseStudiesDetailsDesc : Array<IDetailsDesc>;
  caseStudiesDetailsInfo : Array<IInfo>;
  externalLink :Array<ILink>
}

export interface IPageTitle
{
  title: string;
  subTitle:string;
}

export interface ICourseList{
  singleCourses:Array<ICoursesContent>;
}

export interface ICoursesContent {
  courseImg : string;
  //coursePrice : string;
  coursePriceClass : string;
  authorImg : string;
  authorName : string;
  title : string;
  link : string;
  paragraphText : string;
  courseDuration : string;
  studentApply : string;
}

export interface ICourse{
  code: string
  pageTitleArea : IPageTitle;
  courseDesc : Array<IContent>;
  curriculum : Array<ICurriculum>;
  courseInfo: ICourseInfo;
}

export interface ICourseInfo {
  image?: string;
  courseDetail : Array<IInfo>
}


export interface IInfo {
  icon? : string;
  title : string;
  subTitle? : string;
  text? : string;
}

export interface ICurriculum {
  title : string;
  moduleList : Array<IInfo>;
}


export interface IScientistBoxContent {
  img: string;
  title: string;
  designation: string;
  facebookLink: string;
  facebookIcon: string;
  twitterLink: string;
  twitterIcon: string;
  instagramLink: string;
  instagramIcon: string;
  linkedinLink: string;
  linkedinIcon: string;
  status: string;
}

export interface IDetailsDesc {
  subTitle : string;
  title1 : string;
  title2 : string;
  title3 : string;
  img1 : string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
}




export interface  IContent {
  title : string;
  paragraphText1 : string;
  paragraphText2? : string;
  defaultBtnIcon? : string;
  defaultBtnText? : string;
  defaultBtnLink? : string;
}
export interface  IPublicationList {
  icon : string;
  title : string;
  text?: string;
  link?: string;
  field?:string;
}



export interface  IGrants {
  icon : string;
  title : string;
  text?: string;
  link?: string;
  period?:string;
  amount?: number;
  sponsor?: string;
}

