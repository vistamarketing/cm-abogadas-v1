# 📧 Configuración del Formulario de Contacto con Email

## ✅ ¿Qué se ha implementado?

Se ha configurado el formulario de contacto para enviar automáticamente los datos por email usando **Web3Forms**, un servicio gratuito y confiable.

### Características implementadas:
- ✅ Validación de campos (nombre, apellido, email, teléfono)
- ✅ Mensajes de éxito/error visuales
- ✅ Loading spinner durante el envío
- ✅ Deshabilitar formulario mientras se envía
- ✅ Limpieza automática del formulario tras envío exitoso
- ✅ Auto-ocultamiento del mensaje de éxito después de 5 segundos

## 🚀 Pasos para activar el envío de emails

### 1. Obtener tu API Key de Web3Forms (GRATIS)

1. Ve a: **https://web3forms.com**
2. Haz clic en "Get Started" o "Create Access Key"
3. Ingresa el email donde quieres recibir los formularios: **hola@cmabogadas.es**
4. Recibirás un email de confirmación
5. Confirma tu email haciendo clic en el enlace
6. Te darán tu **Access Key** (algo como: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Configurar la API Key en tu proyecto

Abre el archivo: `services/formService.ts`

Busca esta línea (línea 12):
```typescript
const WEB3FORMS_ACCESS_KEY = 'TU_API_KEY_AQUI';
```

Reemplázala con tu API key real:
```typescript
const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
```

### 3. ¡Listo! Prueba el formulario

1. Ejecuta tu aplicación: `npm run dev`
2. Ve a la página de contacto
3. Completa el formulario
4. Haz clic en "Enviar Datos"
5. Deberías recibir un email en **hola@cmabogadas.es**

## 📨 ¿Qué recibirás en el email?

Cada vez que alguien complete el formulario, recibirás un email con:

- **Asunto**: 🔔 Nuevo contacto desde CM Abogadas
- **De**: CM Abogadas - Formulario Web
- **Contenido**:
  - Nombre completo
  - Email
  - Teléfono
  - Mensaje (si lo escribieron)
  - Fecha y hora del envío

## 🎨 Personalización adicional (opcional)

### Cambiar el email de destino

Si quieres recibir los formularios en otro email, simplemente crea una nueva Access Key en Web3Forms con ese email.

### Personalizar el asunto del email

En `services/formService.ts`, línea 23, puedes cambiar:
```typescript
subject: '🔔 Nuevo contacto desde CM Abogadas',
```

### Agregar más campos

Si agregas más campos al formulario, solo necesitas:

1. Agregar el campo en la interfaz `FormData` (línea 1-6 de formService.ts)
2. Agregar el input en `Contact.tsx`
3. Agregar el campo en el objeto que se envía a Web3Forms (línea 20-30 de formService.ts)

### Personalizar mensajes de validación

En `services/formService.ts`, función `validateFormData` (línea 44-71), puedes cambiar los mensajes de error.

## 🔒 Seguridad

- ✅ Web3Forms incluye protección anti-spam automática
- ✅ Los datos se envían de forma segura (HTTPS)
- ✅ No se almacenan datos en el frontend
- ✅ Validación de campos antes de enviar

## 💰 Límites del plan gratuito

Web3Forms ofrece **250 envíos/mes GRATIS**. Si necesitas más:
- Plan Pro: $9/mes - 10,000 envíos
- Plan Business: $29/mes - 50,000 envíos

Para la mayoría de sitios web, 250 envíos/mes es más que suficiente.

## 🆘 Solución de problemas

### "Hubo un error al enviar el formulario"
- Verifica que hayas configurado correctamente la API Key
- Asegúrate de tener conexión a internet
- Revisa la consola del navegador para más detalles

### "No recibo los emails"
- Verifica tu carpeta de spam
- Confirma que el email en Web3Forms esté verificado
- Prueba con otro email para descartar problemas con el servidor de correo

### "Error de validación"
- Asegúrate de completar todos los campos obligatorios
- Verifica que el email tenga formato válido (ejemplo@dominio.com)
- El teléfono debe tener al menos 9 dígitos

## 📞 Soporte

Si tienes problemas con Web3Forms:
- Documentación: https://docs.web3forms.com
- Soporte: support@web3forms.com
