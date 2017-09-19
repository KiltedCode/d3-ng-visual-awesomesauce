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
      name: 'Festival of Fantasy Parade',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Happily Ever After Fireworks Show',
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
    },

    {
      name: 'Spaceship Earth',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Project Tomorrow: Inventing the Wonders of the Future',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mission: SPACE',
      areaName: 'Future World East',
      type: 'ride',
      height: 44,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Advanced Training Lab',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Test Track',
      areaName: 'Future World East',
      type: 'ride',
      height: 40,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Innovention',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Electirc Umbrella',
      areaName: 'Future World East',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mouse Gear',
      areaName: 'Future World East',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Epcot Character Spot: Baymax',
      areaName: 'Future World West',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Epcot Character Spot: Joy and Sadness',
      areaName: 'Future World West',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Epcot Character Spot: Mickey, Minnie and Goofy',
      areaName: 'Future World West',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Seas with Nemo & Friends',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Turtle Talk With Crush',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Soarin',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Living with the Land',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Circle of Life',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Journey Into Imagination With Figment',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'ImagineWorks',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Disney & Pixar Short Film Festival',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fountain View',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Coral Reef Restaurant',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sunshine Seasons',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Chip \'n\' Dale\'s Harvest Feast at The Garden Grill',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Gift Shop',
      areaName: 'Future World West',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Art of Disney',
      areaName: 'Future World West',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cool Club',
      areaName: 'Future World West',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Grand Fiesta Tour Starring The Three Caballeros',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Choza de Margarita',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'San Angel Inn Restaurante',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'La Hacienda de San Angel',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'La Cantina de San Angel',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'La Cava del Tequila',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Anna and Elsa at Royal Sommerhus',
      areaName: 'World Showcase',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Frozen Ever After',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Princess Storybook Dining at Akershus Royal Banquet Hall',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kringla Bakeri Og Kafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Reflections of China',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Nine Dragons Restaurant',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Lotus Blossom Cafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Joy of Tea',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Biergarten Restaurant',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sommerfest',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Karamell-Küche',
      areaName: 'World Showcase',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tutto Italia Ristorante',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tutto Gusto Wine Cellar',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Via Napoli Ristorante e Pizzeria',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The American Adventure',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Inn',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fife & Drum Tavern',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Block & Hans',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Teppan Edo',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tokyo Dining',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Katsura Grill',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kabuki Cafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Restaurante Marrakesh',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tangierine Cafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Spice Road Table',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Impressions de France',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Chefs de France',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Les Vins des Chefs de France',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Crepes des Chefs de France',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Monsieur Paul',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Les Halles Boulangerie-Patisserie',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'L\'Artisan des Glaces',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'World Traveler',
      areaName: 'World Showcase',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rose & Crown Pub',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rose & Crown Dining Room',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yorkshire County Fish Shop',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'O Canada!',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Le Cellier Steakhouse',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'IllumiNations: Reflections of Earth',
      areaName: 'World Showcase',
      type: 'show',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },

    {
      name: 'The Great Movie Ride',
      areaName: 'Hollywood Boulevard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Trolley Car Cafe',
      areaName: 'Hollywood Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Hollywood Brown Derby',
      areaName: 'Hollywood Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Oscar\'s Super Service',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mickey\'s of Hollywood',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Keystone Clothiers',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Adrian & Edith\'s Head to Toe',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'For the First Time in Forever: A "Frozen" Sing-Along Celebration',
      areaName: 'Echo Lake',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Wars: Path of the Jedi',
      areaName: 'Echo Lake',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Celebrity Spotlight',
      areaName: 'Echo Lake',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Indiana Jones Epic Stunt Spectacular!',
      areaName: 'Echo Lake',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Jedi Training: Trials of the Temple',
      areaName: 'Echo Lake',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Tours - The Adventure Continues',
      areaName: 'Echo Lake',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Hollywood & Vine',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tune-In Lounge',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: '50\'s Prime Time Cafe',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Min and Bill\'s Dockside Diner',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Oasis Canteen',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Backlot Express',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Indiana Jones Adventure Outpost',
      areaName: 'Echo Lake',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: '"Frozen" Fractal Gifts',
      areaName: 'Echo Lake',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tatooine Traders',
      areaName: 'Echo Lake',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Muppet-Vision 3D',
      areaName: 'Muppets Courtyard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'PizzeRizzo',
      areaName: 'Muppets Courtyard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mama Melrose\'s Ristoraunte Italiano',
      areaName: 'Muppets Courtyard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mickey and Minnie Starring in Red Carpet Dreams',
      areaName: 'Commissary Lane',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sci-Fi Dine-In Theater Restaurant',
      areaName: 'Commissary Lane',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'ABC Commissary',
      areaName: 'Commissary Lane',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Toy Story Manie!',
      areaName: 'Pixar Place',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Buzz Lightyear & Woody at Pixar Place',
      areaName: 'Pixar Place',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Hey Howdy Hey Take Away',
      areaName: 'Pixar Place',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Toy Story Dept.',
      areaName: 'Pixar Place',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney: One Man\'s Dream',
      areaName: 'Animation Courtyard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Voyage of the Little Mermaid',
      areaName: 'Animation Courtyard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Wars Launch Bay',
      areaName: 'Animation Courtyard',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Disney Junior - Live on Stage!',
      areaName: 'Animation Courtyard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Disney Studio Store',
      areaName: 'Animation Courtyard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Beauty and the Beast - Live on Stage',
      areaName: 'Sunset Boulevard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Music of Pixar Live! A Symphony of Characters',
      areaName: 'Sunset Boulevard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rock \'n\' Roller Coaster Starring Aerosmith',
      areaName: 'Sunset Boulevard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Twilight Zone Tower of Terror',
      areaName: 'Sunset Boulevard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fantasmic!',
      areaName: 'Sunset Boulevard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sunshine Day Cafe',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Anaheim Produce',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rosie\'s All American Cafe',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Catalina Eddie\'s',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },

    {
      name: 'The Oasis Exhibits',
      areaName: 'Oasis',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rainforest Cafe',
      areaName: 'Oasis',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Garden Gate Gifts',
      areaName: 'Oasis',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Wilderness Explorers',
      areaName: 'Discovery Island',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'It\'s Tough to be a Bug!',
      areaName: 'Discovery Island',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Discovery Island Trails',
      areaName: 'Discovery Island',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Adventurers Outpost',
      areaName: 'Discovery Island',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Eight Spoon Cafe',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Smiling Crocodile',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Flame Tree Barbecue',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Isle of Java',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tiffins',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Nomad Lounge',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pizzafari',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Creature Comforts',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Terra Treats',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Island Mercantile',
      areaName: 'Discovery Island',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Riverside Depot',
      areaName: 'Discovery Island',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Discovery Trading Company',
      areaName: 'Discovery Island',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Na\'vi River Journey',
      areaName: 'Pandora - The World of Avatar',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Avatar Flight of Passage',
      areaName: 'Pandora - The World of Avatar',
      type: 'ride',
      height: 44,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pongu Pongu',
      areaName: 'Pandora - The World of Avatar',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Satu\'li Canteen',
      areaName: 'Pandora - The World of Avatar',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Windtraders',
      areaName: 'Pandora - The World of Avatar',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Festival of the Lion King',
      areaName: 'Africa',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kilimanjaro Safaris',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Gorilla Falls Exploration Trail',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rafiki\'s Planet Watch - Wildlife Express Train',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rafiki\'s Planet Watch - Conservation Station',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rafiki\'s Planet Watch - Affection Section',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Harambe Fruit Market',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Harambe Market',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tamu Tamu Refreshments',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dawa Bar',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Donald\'s Dining Safari at Tusker House Restaurant',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kusafiri Coffee Shop & Bakery',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mombasa Marketplace',
      areaName: 'Africa',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Zuri\'s Sweets Shop',
      areaName: 'Africa',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Flights of Wonder',
      areaName: 'Asia',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Maharajah Jungle Trek',
      areaName: 'Asia',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kali River Rapids',
      areaName: 'Asia',
      type: 'ride',
      height: 38,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Expedition Everest - Legend of the Forbidden Mountain',
      areaName: 'Asia',
      type: 'ride',
      height: 44,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rivers of Light',
      areaName: 'Asia',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Caravan Road',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mr. Kamal\'s',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Warung Outpost',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Drinkwallah',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yak & Yeti Restaurant',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yak & Yeti Local Food Cafes',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yak & Yeti Quality Beverages',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Anandapur Ice Cream Truck',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Thirsty River Bar & Trek Snacks',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Serka Zong Bazaar',
      areaName: 'Asia',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Boneyard',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fossil Fun Games',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Finding Nemo - The Musical',
      areaName: 'Dinoland U.S.A',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Primeval Whirl',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 48,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'TriceraTop Spin',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'DINOSAUR',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 40,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Restaurantosaurus',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dino-Bite Snacks',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Trilo-Bites',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dino Diner',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Chester & Hester\'s Dinosaur Treasures',
      areaName: 'Dinoland U.S.A',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Dino Institute Shop',
      areaName: 'Dinoland U.S.A',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    }
  ];

}
