import { Component } from '@angular/core';

const testData = [
  {'reviewer': {
      'name': 'sue',
      'id': 3,
      'location': 'Queens, NY',
      'reviews': 10,
      'friends': 38,
      'thumbnail': 'https://api.adorable.io/avatars/90/sue.png'
    },
    'review-date': '1/3/2000',
    'stars': 3.5,
    'review-text': 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu eros at quam efficitur vehicula at in felis. Aenean cursus fringilla commodo. Curabitur vulputate nunc tellus, sed rutrum nisi sollicitudin ut. Aliquam lacus nulla, sodales in orci ut, tristique efficitur nunc. Praesent mattis metus sit amet porttitor imperdiet. Nulla sit amet lorem a urna sollicitudin maximus in et eros. Mauris non elit at enim rutrum sagittis non vel odio. Cras luctus enim lorem, a pharetra justo sollicitudin at. Fusce nec porta urna, eget bibendum neque. Integer nec dolor consectetur, auctor diam non, feugiat urna. Aliquam suscipit sem ligula, non sodales velit dignissim id. Integer viverra id nibh sit amet luctus. Sed ut ante mollis, accumsan odio sed, efficitur justo. Integer vel ultrices purus.'
  },
  {'reviewer': {
      'name': 'bob',
      'id': 3,
      'location': 'Little Rock, AR',
      'reviews': 20,
      'friends': 9,
      'thumbnail': 'https://api.adorable.io/avatars/90/bob.png'
    },
    'review-date': '1/6/2000',
    'stars': 3.5,
    'review-text': 'Aliquam erat volutpat. Aliquam volutpat, mauris quis rhoncus dictum, ante libero pharetra urna, sed mollis sapien est in purus. Nulla tempor ex a turpis sollicitudin, at laoreet magna sollicitudin. Sed volutpat efficitur velit quis convallis. Suspendisse semper nunc ligula. Donec quis congue ex. Donec ultrices mattis purus eget feugiat. Curabitur facilisis eu libero in sagittis. Aenean iaculis facilisis arcu et posuere. Praesent interdum tortor ut ligula vestibulum, vel lobortis quam laoreet. Phasellus dignissim dui vel suscipit semper. Suspendisse sit amet augue et est consectetur molestie at eget ante. Maecenas nibh sapien, feugiat eget leo id, gravida efficitur leo. Nulla vel metus maximus mauris euismod porta.'
  },
  {'reviewer': {
      'name': 'dale',
      'id': 3,
      'location': 'New Orleans, LA',
      'reviews': 15,
      'friends': 198,
      'thumbnail': 'https://api.adorable.io/avatars/90/dale.png'
    },
    'review-date': '1/4/2000',
    'stars': 3.5,
    'review-text': 'Donec sollicitudin velit ut rutrum efficitur. Cras placerat ornare orci, efficitur tincidunt nisl vehicula non. Morbi lorem nulla, eleifend ut neque in, imperdiet egestas lorem. Sed et luctus massa. Proin eget erat vel felis cursus elementum nec vitae diam. Aenean imperdiet dignissim lacinia. Sed ac venenatis lacus.'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yelgat-reviews';
  reviews = testData;
}
