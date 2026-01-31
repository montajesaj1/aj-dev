---
layout: '../../layouts/BlogLayout.astro'
title: 'PDEs'
pubDate: 2022-07-02
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---


# Partial Differential Equations (PDEs)

## 1. What Is a Partial Differential Equation?

A **partial differential equation (PDE)** is an equation involving an unknown function of two or more independent variables and its **partial derivatives**.

**General form:**
[
$$
F\big(x_1,\dots,x_n, u, \partial u, \partial^2 u, \dots\big)=0,
$$
]
where $(u = u(x_1,\dots,x_n))$.

**Examples**

* Heat equation: (u_t = \alpha u_{xx})
* Wave equation: (u_{tt} = c^2 u_{xx})
* Laplace equation: (u_{xx} + u_{yy} = 0)

---

## 2. Order and Linearity

### Order

The **order** of a PDE is the highest order derivative appearing in the equation.

* First order: (u_x + u_y = 0)
* Second order: (u_{xx} + u_{yy} = 0)

### Linearity

A PDE is **linear** if the unknown function and its derivatives appear linearly.

**Linear PDE:**
[
a_0(x)u + \sum_i a_i(x),u_{x_i} + \sum_{i,j} a_{ij}(x),u_{x_i x_j} = f(x)
]

**Nonlinear PDE:**

* Products or nonlinear functions of (u) or its derivatives appear
* Example: (u_t + u u_x = 0) (inviscid Burgers' equation)

---

## 3. Classification of Second-Order PDEs

For a second-order linear PDE in two variables:
[
A u_{xx} + 2B u_{xy} + C u_{yy} + \text{lower-order terms} = 0
]

Define the **discriminant**:
[
\Delta = B^2 - AC.
]

| Type       | Condition    | Typical Example | Physical Meaning   |
| ---------- | ------------ | --------------- | ------------------ |
| Elliptic   | (\Delta < 0) | Laplace         | Equilibrium states |
| Parabolic  | (\Delta = 0) | Heat            | Diffusion          |
| Hyperbolic | (\Delta > 0) | Wave            | Propagation        |

---

## 4. Common Model Equations

### 4.1 Laplace Equation (Elliptic)

[
\nabla^2 u = u_{xx} + u_{yy} = 0
]

* Describes steady-state phenomena
* Solutions are **harmonic functions**
* Maximum principle applies

### 4.2 Heat Equation (Parabolic)

[
u_t = \alpha \nabla^2 u
]

* Models diffusion of heat or particles
* Exhibits smoothing of initial data

### 4.3 Wave Equation (Hyperbolic)

[
u_{tt} = c^2 \nabla^2 u
]

* Models vibrations and waves
* Finite propagation speed

---

## 5. Boundary and Initial Conditions

A PDE problem is incomplete without **auxiliary conditions**.

### Initial Conditions (IC)

Specify the state at an initial time:
[
u(x,0) = f(x), \quad u_t(x,0) = g(x).
]

### Boundary Conditions (BC)

* **Dirichlet:** (u = g) on the boundary
* **Neumann:** (\partial u / \partial n = g)
* **Robin (mixed):** (a u + b \partial u / \partial n = g)

---

## 6. Method of Characteristics (First-Order PDEs)

Used to solve equations of the form:
[
a(x,y,u) u_x + b(x,y,u) u_y = c(x,y,u).
]

Key idea: reduce the PDE to ODEs along **characteristic curves**:
[
\frac{dx}{ds} = a, \quad \frac{dy}{ds} = b, \quad \frac{du}{ds} = c.
]

Applications:

* Transport equations
* Conservation laws

---

## 7. Separation of Variables

Assume a solution of the form:
[
u(x,t) = X(x)T(t).
]

This converts a PDE into separate ODEs:
[
\frac{1}{\alpha T} T' = \frac{1}{X} X'' = -\lambda.
]

Leads to **eigenvalue problems** and **Fourier series** solutions.

---

## 8. Fourier Series and Eigenfunctions

For problems on bounded domains, solutions are expanded as:
[
u(x,t) = \sum_{n=1}^\infty a_n e^{-\lambda_n t} \phi_n(x),
]
where (\phi_n) are eigenfunctions of a Sturm–Liouville problem.

Orthogonality:
[
\int_a^b \phi_m(x) \phi_n(x),dx = 0 \quad (m \neq n).
]

---

## 9. Well-Posedness

A PDE problem is **well-posed** (Hadamard) if:

1. A solution exists
2. The solution is unique
3. The solution depends continuously on the data

Ill-posed problems are unstable and physically unrealistic.

---

## 10. Numerical Methods (Overview)

When analytic solutions are unavailable:

* **Finite Difference Methods (FDM)**
* **Finite Element Methods (FEM)**
* **Spectral Methods**

Key issues:

* Stability
* Consistency
* Convergence

---

## 11. Physical Interpretation

PDEs encode:

* Conservation laws
* Symmetries of space and time
* Local-to-global behavior of physical systems

They are foundational in physics, engineering, and applied mathematics.

---

## 12. Summary

* PDEs generalize ODEs to multiple variables
* Classification guides intuition and solution methods
* Boundary and initial conditions are essential
* Exact solutions are rare; structure and approximation matter

---

*End of notes.*

