# IAD Einführung Datenbanken

Unterlagen für Unterricht vom 28. September und 5. Oktober 2019.

## Struktur

```bash
.
├── README.md                # Dieses README.md
├── mysql                    # MySQL Docker Env.
│   ├── database             # Persistierte MySQL Datenbank
│   └── docker-compose.yml   # docker-compose Konfiguration
└── wordpress                # Wordpress Docker Env.
    ├── config               # WordPress PHP Konfiguration (wenn vorhanden)
    ├── data                 # WordPress Daten
    ├── database             # Persistierte MySQL Datenbank
    └── docker-compose.yml   # docker-compose Konfiguration
```

## Installation

Git Repository klonen:

```bash
git clone git@github.com:meengit/iad2017db.git
```

### MySQL Env. starten

```bash
cd ./mysql
docker-compose up -d
```

### WordPress Env. starten

```bash
cd ./wordpress
docker-compose up -d
```