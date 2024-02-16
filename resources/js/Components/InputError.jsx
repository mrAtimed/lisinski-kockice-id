export default function InputError({ msg }) {
    return msg ? (
        <sub style={{color:"var(--form-element-invalid-border-color)"}} >
            {msg}
        </sub>
    ) : null;
}
