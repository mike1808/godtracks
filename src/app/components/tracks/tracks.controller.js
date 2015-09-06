class TracksController {
  constructor($mdDialog, $state, Tracks) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.$state = $state;
    this.Tracks = Tracks;

    this.track = {};

    this.init();
  }

  init() {
    this.Tracks.get()
      .then((tracks) => this.tracks = tracks);
  }

  showDetails(event, track) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .title('Tracking Details')
        .content(`Tracking details of ${track.number}`)
        .ariaLabel('Tracking Details')
        .ok('Close')
        .targetEvent(event)
    );

    return true;
  }

  add() {
    return this.Tracks.add(this.track)
      .then(() => {
        this.track = {};
        this.$state.go('^');
      });
  }

  remove(track) {
    return this.Tracks.remove(track);
  }
}

export default TracksController
