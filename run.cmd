@echo off
rem Ponytail: two lines, because a static site needs a server for ES modules.
cd /d "%~dp0"
python -m http.server 8000
