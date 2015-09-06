class TracksService {
  constructor () {
    this.tracks = [{
      name: 'Dota 2',
      number: 'LJ 854 596 968 US'
    }, {
      name: 'Comply',
      number: 'LN 324 065 579 US'
    }, {
      name: 'DX 1',
      number: 'RW 882 607 661 CH'
    }, {
      name: 'DX 2',
      number: 'RW 882 306 763 CH'
    }]
  }

  get() {
    return this.tracks;
  }
}

export default TracksService
