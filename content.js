function removeBitsRewards() {
  const elements = document.querySelectorAll('[class*="bitsRewardListItem--"]');
  elements.forEach(el => {
    el.remove();
  });
}

function removePowerUps() {
  const elements = document.querySelectorAll('p');
  elements.forEach(el => {
    if (el.textContent.trim() === 'Power-ups') {
      el.remove();
    }
  });
}

function modifyRewardsList() {
  const powerUpsTitle = document.querySelector('p.tw-title');
  if (powerUpsTitle) {
    let flexParent = powerUpsTitle.closest('div[style*="display: flex"]');
    if (flexParent) {
      // Remove the first child (assuming it's the one we want to remove)
      const firstChild = flexParent.firstElementChild;
      if (firstChild) {
        firstChild.remove();
      }
    }
  }
}

function removeElements() {
  removeBitsRewards();
  removePowerUps();
  modifyRewardsList();
}

// Run on page load
removeElements();

// Set up a MutationObserver to handle dynamically added content
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      removeElements();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

console.log("Twitch Bits Reward Hider extension active");
