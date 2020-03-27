import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day2';
  listContent = [
    {
      id: 1,
      img: './assets/img/anh1.jpg',
      content: 'Do ảnh hưởng của dịch Covid-19, nhiều chương trình giải trí, hoạt động kinh doanh cũng như các ngành nghề khác đều phải tạm dừng. ".',
      count: '0',
      state: false
    },
    {
      id: 2,
      img: './assets/img/anh1.jpg',
      content: 'Do ảnh hưởng của dịch Covid-19, nhiều chương trình giải trí, hoạt động kinh doanh cũng như các ngành nghề khác đều phải tạm dừng. ".',
      count: '0',
      state: false
    },
    {
      id: 3,
      img: './assets/img/anh1.jpg',
      content: 'Do ảnh hưởng của dịch Covid-19, nhiều chương trình giải trí, hoạt động kinh doanh cũng như các ngành nghề khác đều phải tạm dừng. ".',
      count: '0',
      state: false
    }
  ]
}
