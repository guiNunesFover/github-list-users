import { Theme } from './symbols';
import { ThemeEnum } from './theme.enum';

export const lightTheme: Theme = 
{
    name: ThemeEnum.light,
    properties: 
    {
        // Pages
        '--page-background-100': '#F3F5F9', // Background
        '--page-font-100': '#4a5a7f', // Font
        '--page-font-200': '#0f214e', // Font title

        // Menu Top
        '--menu-top-background-100': '#fff', // Background
        '--menu-top-font-100': '#0f214e', // Title
        '--menu-top-font-200': '#4a5a7f', // Descriptions

        // Menu lateral
        '--menu-lateral-background-100': '#3B67F2', // Background
        '--menu-lateral-background-200': '#2C2ECE', // Background active
        '--menu-lateral-font-100': '#fff', // Title - Item enabled
        '--menu-lateral-font-200': '#ddd', // Descriptions - Item disabled
        
        // Buttons - Primary
        '--button-primary-background-100': '#222', // Primary
        '--button-primary-background-200': '#000', // Primary hover
        '--button-primary-background-300': '#555', // Primary light
        '--button-primary-focus-100': '#9dc1fb', // Primary focus && disabled
        '--button-primary-font-100': '#fff', // Primary font
        // Buttons - Secondary
        '--button-secondary-background-100': '#d8d8d8', // Secondary
        '--button-secondary-background-200': '#d1d1d1', // Secondary hover
        '--button-secondary-background-300': '#d8d8d820', // Secondary light
        '--button-secondary-focus-100': '#828a9180', // Secondary focus && disabled
        '--button-secondary-font-100': '#4A5A7F', // Secondary font
        // Buttons - Danger
        '--button-danger-background-100': '#dc3545', // Danger
        '--button-danger-background-200': '#c82333', // Danger hover
        '--button-danger-background-300': '#c8233320', // Danger light
        '--button-danger-focus-100': '#FB9D9D', // Danger focus && disabled
        '--button-danger-font-100': '#fff', // Danger font
        // Buttons - Warning
        '--button-warning-background-100': '#ff9966', // Warning
        '--button-warning-background-200': '#F47A3D', // Warning hover
        '--button-warning-background-300': '#F47A3D20', // Warning light
        '--button-warning-focus-100': '#FBCC9D', // Warning focus && disabled
        '--button-warning-font-100': '#fff', // Warning font
        // Buttons - Success
        '--button-success-background-100': '#1eb600', // Warning
        '--button-success-background-200': '#147a00', // Warning hover
        '--button-success-background-300': '#147a0020', // Warning light
        '--button-success-focus-100': '#FBCC9D50', // Warning focus && disabled
        '--button-success-font-100': '#fff', // Warning font

        // Inputs
        '--input-background-100': '#fff', // Background
        '--input-border-100': '#DDDDDD', // Border
        '--input-focus-100': '#9dc1fb', // Focus
        '--input-font-100': '#0f214e', // Font
        '--input-placeholder-100': '#96a0b5', // Placeholder
        '--input-required-100': '#dc3545', // Label required
        '--input-label-100': '#0f214e', // Label
        '--input-error-100': '#dc3545', // Input error
        '--input-error-background-100': '#dc354520', // Input error
        '--input-success-100': '#3B67F2', // Input success
        '--input-success-background-100': '#3B67F220', // Input success
        
        // Datepicker
        '--datepicker-background-header-100': '#3B67F2', // Background header
        '--datepicker-background-100': '#fff', // Background calender
        '--datepicker-font-100': '#0f214e', // Font
        '--datepicker-font-200': '#fff', // Font houver
        '--datepicker-houver-100': '#3B67F2', // Houver
        '--datepicker-border-100': '#DDDDDD', // Border
        '--datepicker-active-100': '#3B67F2', // Active
        '--datepicker-range-selected-background-100': '#e9edf0', // Active

        // Dropdown
        '--dropdown-multi-item-background-100': '#3B67F2', // Item multi selected
        '--dropdown-multi-item-font-100': '#fff', // Item multi selected font
        '--dropdown-list-background-100': '#fff', // List dropdown
        '--dropdown-list-font-100': '#0f214e', // List dropdown font
        '--dropdown-list-border-100': '#DDDDDD', // List dropdown border
        '--dropdown-list-active-background-100': '#3B67F220', // List dropdown border
        '--dropdown-list-active-font-100': '#3B67F2', // List dropdown border
        
        // Footer
        '--footer-background-100': '#fff', // List dropdown border
        '--footer-border-100': '#DDDDDD', // List dropdown border
        '--footer-font-100': '#0f214e', // List dropdown border

        // Modais
        '--modal-background-100': '#00000080', // Background modais
        '--modal-background-content-100': '#fff', // Background modais

        // Dialog
        '--dialog-header-info-background-100': '#3B67F2', // Background header info dialog
        '--dialog-header-info-font-100': '#fff', // Font header info dialog
        '--dialog-header-success-background-100': '#1eb600', // Background header success dialog
        '--dialog-header-success-font-100': '#fff', // Font header success dialog
        '--dialog-header-warning-background-100': '#ff9966', // Background header warning dialog
        '--dialog-header-warning-font-100': '#fff', // Font header warning dialog
        '--dialog-header-danger-background-100': '#dc3545', // Background header danger dialog
        '--dialog-header-danger-font-100': '#fff', // Font header danger dialog
        '--dialog-body-background-100': '#fff', // Background body dialog
        '--dialog-body-font-100': '#0f214e', // Font body dialog
        '--dialog-list-errors-background-100': '#F3F5F9', // Background list error dialog
        '--dialog-list-errors-border-100': '#DDDDDD', // Border list error dialog
        '--dialog-list-errors-font-100': '#0f214e', // Font list error dialog

        // Cards warnign
        '--card-warning-background-100': '#e2e9ff', // Background card warning
        '--card-warning-font-100': '#3B67F2', // Font card warning
        '--card-warning-border-100': '#DDDDDD', // Border card warning

        // Notificacoes
        '--notification-font-100': '#0f214e', // Font title
        '--notification-font-200': '#4a5a7f', // Font description
        '--notification-font-300': '#fff', // Font icons
        '--notification-background-100': '#fff', // Background
        '--notification-success-100': '#1eb600', // Background success
        '--notification-success-light-100': '#1eb60050', // Background success light
        '--notification-info-100': '#3B67F2', // Background info light
        '--notification-info-light-100': '#3B67F250', // Background info light
        '--notification-danger-100': '#dc3545', // Background danger light
        '--notification-danger-light-100': '#dc354550', // Background danger light
        '--notification-warning-100': '#ff9966', // Background warning light
        '--notification-warning-light-100': '#ff996650', // Background warning light

        // Tag times
        '--time-remove-background-100': '#dc3545', // Background
        '--time-remove-font-100': '#fff', // Background
        '--time-available-background-100': '#fff', // Background
        '--time-available-font-100': '#3B67F2', // Background
        '--time-available-border-100': '#3B67F2', // Background
        '--time-checked-background-100': '#3B67F2', // Background
        '--time-checked-font-100': '#fff', // Background
        '--time-checked-border-100': '#3B67F2', // Background
        '--time-day-offbackground-100': '#0f214e1a', // Background
        '--time-day-offfont-100': '#0F214E', // Background
        '--time-day-offborder-100': '#0F214E', // Background
        '--time-off-background-100': '#dddddd10', // Background
        '--time-off-font-100': '#dddddd', // Background
        '--time-off-border-100': '#dddddd', // Background
        '--time-reserved-background-100': '#dc3545', // Background
        '--time-reserved-font-100': '#fff', // Background
        '--time-reserved-border-100': '#dc3545', // Background
        '--time-pre-reserved-background-100': '#ff9966', // Background
        '--time-pre-reserved-font-100': '#fff', // Background
        '--time-pre-reserved-border-100': '#ff9966', // Background
        '--time-reserved-month-background-100': '#7120AC', // Background
        '--time-reserved-month-font-100': '#fff', // Background
        '--time-reserved-month-border-100': '#7120AC', // Background
        
        // Cards
        '--cards-background-100': '#fff', // Background
        '--cards-border-100': '#dddddd', // Background
        '--cards-background-primary-100': '#3B67F2', // Primary
        '--cards-background-primary-200': '#3B67F210', // Primary
        '--cards-background-danger-100': '#dc3545', // Danger
        '--cards-background-warning-100': '#ff9966', // Warning
        '--cards-background-secondary-100': '#9f9f9f', // Secondary
        '--cards-background-success-100': '#1eb600', // Success
        '--cards-font-100': '#0f214e', // Background title
        '--cards-font-200': '#4a5a7f', // Background
        '--cards-font-300': '#fff', // Background

        // Tables
        '--table-header-font-100': '#3B67F2', // Font header cards
        '--table-header-border-100': '#DDDDDD', // Border header cards
        '--table-header-background-100': '#e2e9ff', // Background header cards
        '--table-row-font-100': '#4a5a7f', // Background header cards
        '--table-row-border-100': '#DDDDDD', // Border header cards
        '--table-row-background-100': '#fff', // Background header cards
    }
};
