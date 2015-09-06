class MainController {
  constructor ($mdDialog, Track) {
    'ngInject';

    this.$mdDialog = $mdDialog;

    this.tracks = Track.get();
  }

  showDetails(event, track) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .title('Tracking Details')
        .content(`Tracking details of ${track.number}`)
        .ariaLabel('Tracking Details')
        .ok('Done!')
        .targetEvent(event)
    );

    return true;
  }

}

export default MainController;
