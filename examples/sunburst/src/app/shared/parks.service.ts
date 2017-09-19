import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Park } from './park.model';
import { ParkAttraction } from './park-attraction.model';

@Injectable()
export class ParksService {

  private parks: Park[];
  private attractions: ParkAttraction[];

  constructor() { }

  getParkAttractions(): Observable<ParkAttraction[]> {
    if(this.attractions == null) {
      let localAttractions = null; //localStorage.getItem('attractions');
      if(localAttractions == null) {
        this.attractions = this.defaultAttractions;
        localStorage.setItem('attractions', JSON.stringify(this.attractions));
      } else {
        this.attractions = JSON.parse(localAttractions);
      }
    }
    return Observable.of(this.attractions);
  }

  resetData(): void {
    localStorage.clear();
  }


  /* default data */

  private defaultAttractions: ParkAttraction[] = [
    {
      name: 'Walt Disney World Railroad',
      areaName: 'Main Street, U.S.A.',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Harmony Barber Shop',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Town Square Theater',
      areaName: 'Main Street, U.S.A.',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tony\'s Town Square Restaurant',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Main Street Bakery',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Plaza Ice Cream Parlor',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Plaza Restaurant',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Casey\'s Corner',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Crystal Palace',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Main Street Chamber of Commerce',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Emporium',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Uptown Jewelers',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Main Street Trolley Show',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Dapper Dans',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Citizens of Main Street',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Casey\'s Corner Pianist',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Swiss Family Treehouse',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Magic Carpets of Aladdin',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Jungle Cruise',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney\'s Enchanted Tiki Room',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pirates of the Caribbean',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sunshine Tree Terrace',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Jungle Navigation Co Ltd Skipper Canteen',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Aloha Isle',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tortuga Tavern',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Pirates League',
      areaName: 'Adventureland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Splash Mountain',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney World Railroad',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Big Thunder Mountain Railroad',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tom Sawyer Island',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Country Bear Jamboree',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Golden Oak Outpost',
      areaName: 'Frontierland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pecos Bill Tall Tale inn and Cafe',
      areaName: 'Frontierland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Westward Ho',
      areaName: 'Frontierland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Frontier Trading Post',
      areaName: 'Frontierland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Hall of Presidents',
      areaName: 'Liberty Square',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Square Riverboad',
      areaName: 'Liberty Square',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Haunted Mansion',
      areaName: 'Liberty Square',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Diamond Horseshoe',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Tree Tavern',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sleepy Hollow',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Square Market',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Columbia Harbour House',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Prince Charming Regal Carrousel',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mickey\'s PhilharMagic',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Peter Pan\'s Flight',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'it\'s a small world',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Enchanted Tales with Belle',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Under the Sea - Journey of the Little Mermaid',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Ariel in Her Grotto',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pete\'s Silly Sideshow',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney World Railroad',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Casey Jr. Splash \'N\' Soak Station',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Barnstormer',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dumbo the Flying Elephant',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mad Tea Party',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fairytale Garden',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Many Adventures of Winnie the Pooh',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Seven Dwarfs Mine Train',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Princess Fairytale Hall',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cinderella\'s Royal Table',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pinocchio Village Haus',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Bee Our Guest Restaurant',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Gaston\'s Tavern',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Prince Eric\'s Village Market',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cheschire Cafe',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Storybook Treats',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Friar\'s Nook',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Bibbidi Bobbidi Boutique',
      areaName: 'Fantasyland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Big Top Souvenirs',
      areaName: 'Fantasyland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Monsters, Inc. Laugh Floor',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Stitch\'s Great Escape!',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tomorrowland Speedway',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Space Mountain',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Astro Orbiter',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tomorrowland Transit Authority PeopleMover',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney\'s Carousel of Progress',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Buzz Lightyear\'s Space Ranger Spin',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cosmic Ray\'s Starlight Cafe',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Auntie Gravity\ss Galactic Goodies',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cool Ship',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Lunching Pad',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tomorrowland Terrace Restaurant',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Merchant of Venus',
      areaName: 'Tomorrowland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    }
  ];

}
