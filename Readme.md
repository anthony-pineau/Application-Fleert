**Backend**

Les pré-requis techniques :
- [PHP et une base de données](https://www.wampserver.com/)
- [Symfony](https://symfony.com/doc/current/index.html)
- [Composer](https://getcomposer.org/)

Démarrer l'Api Symfony :
- Dans le fichier .env ligne 26 remplir les informations nécessaires à la connexion à une base données mysql ou autre.
- cd Api/
- composer install
- php bin/console doctrine:migrations:migrate
- symfony server:start
----

**Frontend**

Les pré-requis techniques :
- [NPM]([link](https://docs.npmjs.com/))
- [ReactNative]([link](https://reactnative.dev/))
- [Expo Go]([link](https://docs.expo.dev/get-started/installation/))

Démarrer l'application Reactnative :
- cd Front-end/
- npm i
- expo start
- 