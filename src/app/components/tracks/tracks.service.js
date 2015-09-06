class TracksService {
  constructor ($log, $q, $localStorage, $timeout) {
    'ngInject';

    this.$log = $log;
    this.$q = $q;
    this.$localStorage = $localStorage;
    this.$timeout = $timeout;

    $localStorage.$default({
      tracks: [{
        name: 'Dota 2',
        number: 'LJ 854 596 968 US',
        status: 'In transit'
      }, {
        name: 'Comply',
        number: 'LN 324 065 579 US',
        status: 'In transit'
      }, {
        name: 'DX 1',
        number: 'RW 882 607 661 CH',
        status: 'Delivered'
      }, {
        name: 'DX 2',
        number: 'RW 882 306 763 CH',
        status: 'Delivered'
      }]
    });

    this.tracks = $localStorage.tracks;
  }

  get() {
    this.$log.debug('fetching tracks');

    // emulating delays
    return this.$timeout(() => this.tracks, 2000);
  }

  add({ name, number, status='Added'}) {
    let index = this.tracks.push({ name, number, status });
    return this.$q.when(this.tracks[index]);
  }

  remove(track) {
    let index = this.tracks.indexOf(track);
    this.tracks.splice(index, 1);
    return this.$q.when(this.tracks[index]);
  }
}

export default TracksService
