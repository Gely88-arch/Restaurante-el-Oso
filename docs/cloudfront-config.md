\# Configuración de CloudFront



\## Distribución

\- ID: EZ51FAZ1VV9NW

\- Dominio: dd798tef247l0.cloudfront.net

\- Estado: Enabled / Deployed



\## Origen

\- Dominio: restaurante-el-oso2.s3-website-us-east-1.amazonaws.com

\- Protocolo: HTTP only

\- Default root object: index.html



\## HTTPS

\- Viewer protocol policy: Redirect HTTP to HTTPS

\- Verificado con curl: respuesta 301 con Location https://...



\## Caché

\- Política: cache-restaurante-oso

\- TTL mínimo: 0 / predeterminado: 86400 / máximo: 31536000

\- Métodos permitidos: GET, HEAD

\- Compresión: Gzip y Brotli



\## Seguridad

\- WAF: desactivado



\## Comportamiento de caché



CloudFront guarda en caché las respuestas del origen (S3) en el punto de presencia que atiende al usuario. Con la política `cache-restaurante-oso` (TTL mínimo 0, predeterminado 86400 y máximo 31536000 segundos), un archivo sin encabezados de caché propios se conserva 24 horas.



\### Miss y Hit

\- La primera petición devuelve `X-Cache: Miss from cloudfront`: CloudFront no tenía el objeto y lo pidió a S3.

\- Las siguientes devuelven `X-Cache: Hit from cloudfront`, junto con el encabezado `Age`, que indica los segundos que lleva el objeto en caché. En esos casos S3 no recibe la petición.



\### Qué ocurre cuando se modifica un archivo ya almacenado en caché

Si `index.html` cambia en S3, CloudFront sigue entregando la copia anterior hasta que ocurra una de estas dos cosas:

1\. Vence el TTL (hasta 24 horas con la configuración actual), tras lo cual CloudFront vuelve a consultar al origen.

2\. Se crea una invalidación (por ejemplo, con la ruta `/\*`), que elimina las copias almacenadas y obliga a pedir la versión nueva a S3.



Por eso, después de actualizar un archivo en S3, el origen muestra el contenido nuevo y CloudFront puede seguir mostrando el anterior. Esto se comprobará en la prueba experimental de caché y se resolverá con una invalidación.

