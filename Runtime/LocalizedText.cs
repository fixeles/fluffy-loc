using TMPro;
using UnityEngine;

namespace FPS.Localization
{
    [RequireComponent(typeof(TextMeshProUGUI))]
    public class LocalizedText : MonoBehaviour
    {
        [SerializeField, Get] private TMP_Text text;
        [SerializeField] private string key;

        private void OnEnable()
        {
            text.text = FluffyLoc.Get(key);
        }
    }
}