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

