$(document).ready( function() {
  if( !_.includes(App.mode, 'chain-show') ) { return }

  new App.Cosmos.ValidatorTable( $('.validator-table') ).render()
  new App.Cosmos.SmallAverageBlockTimeChart( $('.average-block-time-chart') ).render()
  new App.Cosmos.TinyAverageActiveValidatorsChart( $('.average-active-validators-chart') ).render()

  // 2 voting power charts
  const charts = {
    last48h: null,
    last30d: null
  }

  const switcherButtons = $('.validator-sparkline-switcher button')

  switcherButtons.click( ( e ) => {
    e.preventDefault()
    const button = $(e.currentTarget)
    const target = button.data('target')
    $(`.small-average-voting-power-${target}-chart-container`).siblings().hide().end().show()
    charts[target] = charts[target] || new App.Cosmos.SmallAverageVotingPowerChart( $(`.average-voting-power-${target}-chart`), target ).render()
    button.siblings().removeClass('active').end().addClass('active')
  } )
  switcherButtons.first().trigger('click')
} )
