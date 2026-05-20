#!/usr/bin/env bash
# Install Chromium runtime libraries on Vercel (Amazon Linux 2023).
# Playwright's `install --with-deps` uses apt-get, which is unavailable there.
set -euo pipefail

if [[ ! -r /etc/os-release ]] || ! grep -q "Amazon Linux" /etc/os-release; then
  exit 0
fi

if ! command -v dnf >/dev/null 2>&1; then
  echo "install-vercel-system-deps: dnf not found on Amazon Linux; skipping"
  exit 0
fi

echo "install-vercel-system-deps: installing Chromium system libraries via dnf…"

dnf install -y \
  alsa-lib \
  atk \
  at-spi2-atk \
  at-spi2-core \
  cups-libs \
  gtk3 \
  libXcomposite \
  libXcursor \
  libXdamage \
  libXext \
  libXi \
  libXrandr \
  libXScrnSaver \
  libXtst \
  libdrm \
  libgbm \
  libxkbcommon \
  nss \
  pango

echo "install-vercel-system-deps: done"
