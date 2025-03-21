import { Component } from '@angular/core';

@Component({
  selector: 'app-mou',
  templateUrl: './mou.component.html',
  styleUrls: ['./mou.component.css']
})
export class MouComponent {

  activeIndex: number | null = null; // Only one image should be open at a time

  mouList = [
    { title: "MOU Done with Pro - Vice Chancellor Dr Ramchandra Pujeri Sir at MIT ADT University Loni Kalbhor Campus, Pune", image: "assets/images/mou1.jpg" },
    { title: "MOU done With Principal Dr Sayyad sir at Ajeenkya DY Patil School of Engineering, Lohagaon", image: "assets/images/mou2.jpg" },
    { title: "MOU done with PVG Engineering College, Pune", image: "assets/images/mou3.jpg" },
    { title: "MOU done with Principal Sir & TPO Mr Shrikant Patil Sir at JSPM Engineering College, Narhe", image: "assets/images/mou4.jpg" },
    { title: "MOU done With Principal Dr Milind Rohokale sir at SKN Sinhgad Institute of Technology & Science, Lonavala", image: "assets/images/mou5.jpg" },
    { title: "MOU done with Dr Banmote sir principal, Dean TPO Dr Nikku Khalsa sir and prof Ram Meghe Institute of Technology and Research BADNERA, Amaravati", image: "assets/images/mou6.jpg" },
    { title: "MOU done With Principal Dr Sachin Babar sir at Sinhgad Institute of Technology, Lonavala", image: "assets/images/mou7.jpg" },
    { title: "MOU done with Dr Thakare sir, TPO at Sipna College of Engineering, Amaravati", image: "assets/images/mou8.jpg" },
    { title: "MOU done with principal sir and TPO Mr. Manwar sir Takshshila Institute of Engineering and Technology, Darapur", image: "assets/images/mou9.jpg" },
    { title: "MOU done with Dr Sagar Jirapure sir principal Rajendra Gode Institute of Technology and Research", image: "assets/images/mou10.jpg" },
    { title: "MOU done with principal Dr Harkut sir, TPO Dr. Thorat sir and prof Ram Meghe College of Engineering and management Badnera, Amaravati", image: "assets/images/mou11.jpg" },
  ];

  toggleImage(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index; // Close if same image, otherwise open new one
  }
  
}
