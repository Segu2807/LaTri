// src/styles/globalStyles.js
import { Platform } from 'react-native';

// Configuración de tipografía
export const typography = {
  fontFamily: {
    // Fuentes que funcionan en ambos sistemas
    regular: 'Times New Roman',
    bold: 'Times New Roman-Bold',
    italic: 'Times New Roman-Italic',
  },
  fontSize: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28,
    huge: 32,
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

// Colores globales
export const colors = {
  primary: '#003DA5',     // Azul Ecuador
  secondary: '#FFCC00',   // Amarillo Ecuador
  background: '#FFF9E6',
  text: '#333333',
  textLight: '#666666',
  white: '#FFFFFF',
  black: '#000000',
  success: '#2ECC71',
  error: '#E74C3C',
  warning: '#F39C12',
};

// Estilos de texto predefinidos
export const textStyles = {
  // Títulos principales
  h1: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxxl,
    color: colors.primary,
  },
  h2: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
    color: colors.primary,
  },
  h3: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    color: colors.primary,
  },
  
  // Texto de cuerpo
  body: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  bodyBold: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  
  // Texto pequeño
  small: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textLight,
  },
  smallBold: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.sm,
    color: colors.textLight,
  },
  
  // Texto muy pequeño
  tiny: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textLight,
  },
  
  // Títulos de tarjetas
  cardTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.primary,
  },
  
  // Texto de botones
  button: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.white,
  },
  
  // Etiquetas
  label: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textLight,
  },
};

// Estilos de contenedores
export const containerStyles = {
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// Espaciado global
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};