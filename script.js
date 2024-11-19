document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");

    // Botones para alternar entre los formularios
    registerBtn.addEventListener("click", () => container.classList.add("active"));
    loginBtn.addEventListener("click", () => container.classList.remove("active"));

    // Función para registrar usuarios
    const registerButton = document.querySelector(".sign-up button");
    registerButton.addEventListener("click", () => {
        const name = document.querySelector(".sign-up input[placeholder='Nombre']").value.trim();
        const user = document.querySelector(".sign-up input[placeholder='Usuario']").value.trim();
        const password = document.querySelector(".sign-up input[placeholder='Contraseña']").value;

        if (!name || !user || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Guardar datos en localStorage
        localStorage.setItem("user", JSON.stringify({ name, user, password }));
        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        container.classList.remove("active"); // Cambiar al formulario de inicio de sesión
    });

    // Función para iniciar sesión
    const loginButton = document.querySelector(".sign-in button");
    loginButton.addEventListener("click", () => {
        const user = document.querySelector(".sign-in input[placeholder='Usuario']").value.trim();
        const password = document.querySelector(".sign-in input[placeholder='Contraseña']").value;
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");

    // Botones para alternar entre los formularios
    registerBtn.addEventListener("click", () => container.classList.add("active"));
    loginBtn.addEventListener("click", () => container.classList.remove("active"));

    // Función para registrar usuarios
    const registerButton = document.querySelector(".sign-up button");
    registerButton.addEventListener("click", () => {
        const name = document.querySelector(".sign-up input[placeholder='Nombre']").value.trim();
        const user = document.querySelector(".sign-up input[placeholder='Usuario']").value.trim();
        const password = document.querySelector(".sign-up input[placeholder='Contraseña']").value;

        if (!name || !user || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Guardar datos en localStorage
        localStorage.setItem("user", JSON.stringify({ name, user, password }));
        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        container.classList.remove("active"); // Cambiar al formulario de inicio de sesión
    });

    // Función para iniciar sesión
    const loginButton = document.querySelector(".sign-in button");
    loginButton.addEventListener("click", () => {
        const user = document.querySelector(".sign-in input[placeholder='Usuario']").value.trim();
        const password = document.querySelector(".sign-in input[placeholder='Contraseña']").value;

        if (!user || !password) {
            alert("Por favor, ingresa tus credenciales.");
            return;
        }

        // Verificar credenciales en localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.user === user && storedUser.password === password) {
            alert(`¡Bienvenido, ${storedUser.name}!`);
            window.location.href = "pagina.html"; // Redirige a una página vacía
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});

        if (!user || !password) {
            alert("Por favor, ingresa tus credenciales.");
            return;
        }

        // Verificar credenciales en localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.user === user && storedUser.password === password) {
            alert(`¡Bienvenido, ${storedUser.name}!`);
            window.location.href = "pagina.html"; // Redirige a una página vacía
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
