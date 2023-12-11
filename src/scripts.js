function changeImageColor(container, originalSrc, hoverSrc) {
    const img = container.querySelector("img");
    img.src = hoverSrc;
  }

  function resetImageColor(container, originalSrc) {
    const img = container.querySelector("img");
    img.src = originalSrc;
  }
  